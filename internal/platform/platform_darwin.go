// go:build darwin
package platform

type Platform struct{}

func (p *Platform) GetPlatform() PlatformName {
	return Darwin
}
