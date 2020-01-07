import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneConditionalTypeNode(
	node: TS.ConditionalTypeNode,
	options: CloneNodeInternalOptions<TS.ConditionalTypeNode>
): TS.ConditionalTypeNode {
	return options.typescript.createConditionalTypeNode(
		options.hook("checkType", cloneNode(node.checkType, nextOptions(options)), node.checkType, payload(options)),
		options.hook("extendsType", cloneNode(node.extendsType, nextOptions(options)), node.extendsType, payload(options)),
		options.hook("trueType", cloneNode(node.trueType, nextOptions(options)), node.trueType, payload(options)),
		options.hook("falseType", cloneNode(node.falseType, nextOptions(options)), node.falseType, payload(options))
	);
}
