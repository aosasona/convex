// go:build windows

package platform

type Platform struct{}

func (p *Platform) GetPlatform() PlatformName {
	return Windows
}
