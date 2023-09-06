package menus

import (
	"github.com/wailsapp/wails/v2/pkg/menu"
	"github.com/wailsapp/wails/v2/pkg/menu/keys"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

var stayOnTop bool

func setupWindowMenu() {
	windowMenu := AppMenu.AddSubmenu("Window")
	windowMenu.AddCheckbox("Stay on Top", stayOnTop, keys.OptionOrAlt("t"), func(data *menu.CallbackData) {
		stayOnTop = data.MenuItem.Checked
		runtime.WindowSetAlwaysOnTop(appCtx, stayOnTop)
	})
}
