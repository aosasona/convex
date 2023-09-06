package menus

import (
	"context"
	"runtime"

	"github.com/wailsapp/wails/v2/pkg/menu"
)

var (
	AppMenu = menu.NewMenu()
	appCtx  context.Context
)

func init() {
	if runtime.GOOS == "darwin" {
		AppMenu.Append(menu.AppMenu())
		AppMenu.Append(menu.EditMenu())
	}
	setupWindowMenu()
}

func SetContext(ctx context.Context) {
	appCtx = ctx
}
