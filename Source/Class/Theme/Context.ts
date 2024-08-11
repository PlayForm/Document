import {
	type DefaultTheme,
	DefaultThemeRenderContext,
	type Options,
	type PageEvent,
	type Reflection,
} from "typedoc";

export default class extends DefaultThemeRenderContext {
	constructor(
		theme: DefaultTheme,
		page: PageEvent<Reflection>,
		options: Options,
	) {
		super(theme, page, options);

		this.init();
	}
	// biome-ignore lint/suspicious/noEmptyBlockStatements:
	init() {}
}
