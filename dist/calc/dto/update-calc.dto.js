"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalcDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_calc_dto_1 = require("./create-calc.dto");
class UpdateCalcDto extends (0, mapped_types_1.PartialType)(create_calc_dto_1.CreateCalcDto) {
}
exports.UpdateCalcDto = UpdateCalcDto;
//# sourceMappingURL=update-calc.dto.js.map