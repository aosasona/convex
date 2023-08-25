package filesystem

import (
	"log"
	"os"
	"os/user"
)

type Entry struct {
	Name string `json:"name"`
}

type FilePath struct {
	Name     string     `json:"name"`
	Path     string     `json:"path"`
	Children []FilePath `json:"children"`
	Parents  []FilePath `json:"parents"`
}

type Filesystem struct {
	root string
}

var FS = &Filesystem{}

func init() {
	FS.SetRoot("~")
}

func (fs *Filesystem) SetRoot(root string) {
	fs.root = root
}

func (fs *Filesystem) GetRoot() FilePath {
	if fs.root == "~" {
		user, err := user.Current()
		if err != nil {
			log.Fatalf("Failed to get current user: %s", err)
		}

		name := user.Username
		if name == "" {
			name = user.Name
		}

		return FilePath{Name: name, Path: user.HomeDir}
	}

	var name string
	for i := len(fs.root) - 1; i >= 0; i-- {
		if fs.root[i] == '/' {
			name = fs.root[i+1:]
			break
		}
	}
	return FilePath{Name: name, Path: fs.root}
}

func (fs *Filesystem) GetAll(root string) []Entry {
	if root == "" {
		root = "~"
	}
	files, err := os.ReadDir(root)
	if err != nil {
		log.Fatal(err)
	}

	var entries []Entry
	for _, file := range files {
		entries = append(entries, Entry{file.Name()})
	}

	return entries
}
