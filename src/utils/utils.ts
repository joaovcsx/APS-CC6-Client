import { ScreenType } from '../interfaces/screentype'

export function getScreenType() {
    let screenSize: number = window.innerWidth;
    let tabletSize: number = 720;
    let desktopSize: number = 1024;
    if (screenSize < tabletSize)
        return ScreenType.phone;
    else if (screenSize >= tabletSize && screenSize < desktopSize)
        return ScreenType.tablet;
    else if (screenSize >= desktopSize)
        return ScreenType.desktop;
}

export function getSizeModal() {
    let width: string;
    let height: string;
    let innerHeight = window.innerHeight
    let innerWidth = window.innerWidth
    let screenType = ScreenType;
    let screen = getScreenType();
    if (screen == screenType.phone) {
        width = innerWidth * 0.7 + 'xp';
        height = innerHeight * 0.9 + 'xp';
    } else if (screen == screenType.tablet) {
        width = innerWidth * 0.6 + 'xp';
        height = innerHeight * 0.85 + 'xp';
    } else {
        width = innerWidth * 0.6 + 'xp';
        height = innerHeight * 0.85 + 'xp';
    }
    return {width: width, height: height}
}