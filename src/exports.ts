/**
 * Copyright 2015 CANAL+ Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ugly but working webpack workaround to be able to import the library in
// CommonJS mode.
// TODO investigate
/* tslint:disable no-unsafe-any */
/* tslint:disable no-var-requires */
module.exports = require("./index.ts").default;
/* tslint:enable no-var-requires */
/* tslint:enable no-unsafe-any */
