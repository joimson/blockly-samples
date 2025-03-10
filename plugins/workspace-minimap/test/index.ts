/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Plugin test.
 */

import * as Blockly from 'blockly';
import {toolboxCategories, createPlayground} from '@blockly/dev-tools';
import {Minimap, PositionedMinimap} from '../src/index';

let minimap = null;
let workspace = null;

/**
 * Create a workspace.
 *
 * @param blocklyDiv The blockly container div.
 * @param options The Blockly options.
 * @returns The created workspace.
 */
function createWorkspace(
  blocklyDiv: HTMLElement,
  options: Blockly.BlocklyOptions,
): Blockly.WorkspaceSvg {
  // Creates the primary workspace and adds the minimap.
  if (minimap) {
    minimap.dispose();
  }
  workspace = Blockly.inject(blocklyDiv, options);
  minimap = new PositionedMinimap(workspace);
  minimap.init();

  return workspace;
}

document.addEventListener('DOMContentLoaded', function () {
  createPlayground(document.getElementById('root'), createWorkspace as any, {
    toolbox: toolboxCategories,
  });
});
