import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is an OptionalTypeNode
 */
export function isOptionalTypeNode(node: MetaNode, typescript: typeof TS): node is TS.OptionalTypeNode {
	// TypeScript 4.x
	if (("isOptionalTypeNode" in typescript) as never) {
		return typescript.isOptionalTypeNode(node);
	}
	return node.kind === typescript.SyntaxKind.OptionalType;
}
