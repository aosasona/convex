package filesystem

import (
	"log"
	"os"
	"os/user"
	"strings"
)

type Entry struct {
	Name           string `json:"name"`
	Path           string `json:"path"`
	Ext            string `json:"ext"`
	IsDir          bool   `json:"isDir"`
	Size           int64  `json:"size"`
	LastModifiedAt int64  `json:"lastModifiedAt"`
}

type FilePath struct {
	Name string `json:"name"`
	Path string `json:"path"`
}

type Filesystem struct {
	root string
}

var FS = &Filesystem{}

func init() {
	homedir, err := os.UserHomeDir()
	if err != nil {
		log.Fatalf("Failed to get home directory: %s", err)
	}
	FS.SetRoot(homedir)
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

// TODO: better error handling
func (fs *Filesystem) GetAllEntriesInCurrentRoot() []Entry {
	files, err := os.ReadDir(fs.root)
	if err != nil {
		log.Fatal(err)
	}

	var entries []Entry
	for _, file := range files {
		info, err := file.Info()
		if err != nil {
			continue
		}

		var ext string
		if !info.IsDir() {
			parts := strings.Split(info.Name(), ".")
			if len(parts) > 1 {
				ext = parts[len(parts)-1]
			}
		}

		entries = append(entries, Entry{
			Name:           info.Name(),
			Path:           fs.root + "/" + info.Name(),
			Ext:            ext,
			IsDir:          file.IsDir(),
			LastModifiedAt: info.ModTime().Unix(),
			Size:           info.Size(),
		})
	}

	return entries
}
