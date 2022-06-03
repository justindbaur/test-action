"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = require("@actions/github");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var token = process.env.GITHUB_TOKEN;
        if (!token) {
            console.log("No token found");
            return;
        }
        const github = (0, github_1.getOctokit)(token, {
            log: console
        });
        const pull = yield github.rest.pulls.get({
            owner: "justindbaur",
            repo: "test-action",
            pull_number: 1
        });
        console.log(pull.data.head.ref);
        console.log(pull.data.base.ref);
    });
}
main()
    .catch(console.error);
