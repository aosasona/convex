// go:build linux
package platform

type Platform struct{}

func (p *Platform) GetPlatform() PlatformName {
	return Linux
}
