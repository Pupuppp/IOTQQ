const request = require("request-promise");
var InterfaceConfig = require("./interface");

const ReplaceValue = (Host, QQ, Url) => {
    return Url.replace("$Host", Host).replace("$QQ", QQ);
};

class BaseInterface {
    constructor(Host) {
        this.Host = Host;
        let FunctionNameList = Object.keys(InterfaceConfig);
        FunctionNameList.map(FunctionName => {
            if (InterfaceConfig[FunctionName].Method === "GET") {
                this[FunctionName] = async Params => {
                    let Api = ReplaceValue(
                        this.Host,
                        this.QQ,
                        InterfaceConfig[FunctionName].Url
                    );
                    return request({
                        url: Api,
                        method: InterfaceConfig[FunctionName].Method
                    });
                };
            } else {
                this[FunctionName] = async Params => {
                    let InterfaceParams = {};
                    InterfaceConfig[FunctionName].Params.map(Value2 => {
                        let { Required, ParamsName, ParamsType } = Value2;
                        if (Required) {
                            if (Params.hasOwnProperty(ParamsName)) {
                                /* 检查参数是否存在 */

                                if (typeof(Params[ParamsName] === ParamsType)) {
                                    /* 检查参数类型 */
                                    InterfaceParams[ParamsName] = Params[ParamsName];
                                } else {
                                    throw new Error("Params type error");
                                }
                            } else {
                                throw new Error("Params error");
                            }
                        }
                    });

                    let Api = ReplaceValue(
                        this.Host,
                        this.QQ,
                        InterfaceConfig[FunctionName].Url
                    );
                    return request({
                        url: Api,
                        method: InterfaceConfig[FunctionName].Method,
                        body: InterfaceParams,
                        json: true
                    });
                };
            }
        });
    }
    SetCurrentQQ(QQ) {
            this.QQ = QQ;
        }
        /**
         *
         *
         * @param {*} Params {toUser:<int>,content:<string>,atUser:<int>}
         * @memberof Interface
         */
    async SendFriendMsgText(Params) {
        let Default = {
            sendToType: 1,
            groupid: 0,
            sendMsgType: "TextMsg"
        };
        Object.assign(Params, Default);
        return this.SendMsg(Params);
    }

    /**
     *
     *
     * @param {*} Params {toUser:<int>,content:<string>,atUser:<int>,picUrl:<string>,picBase64Buf:<string>,fileMd5:<string>}
     * @memberof Interface
     */
    async SendFriendMsgImage(Params) {
        let Default = {
            sendToType: 1,
            groupid: 0,
            sendMsgType: "PicMsg"
        };
        Object.assign(Params, Default);
        return this.SendMsg(Params);
    }

    /**
     *
     * silk文件格式
     * @param {*} Params  {toUser:<int>,content:<string>,atUser:<int>,voiceUrl:<string>,"voiceBase64Buf":<string>}
     * @memberof Interface
     */
    async SendFriendMsgVoice(Params) {
        let Default = {
            sendToType: 1,
            groupid: 0,
            sendMsgType: "VoiceMsg"
        };
        Object.assign(Params, Default);
        return this.SendMsg(Params);
    }

    async SendGroupMsgText(Params) {
        let Default = {
            sendToType: 2,
            groupid: 0,
            sendMsgType: "TextMsg"
        };
        Object.assign(Params, Default);
        return this.SendMsg(Params);
    }

    async SendGroupMsgImage(Params) {
        let Default = {
            sendToType: 2,
            groupid: 0,
            sendMsgType: "PicMsg"
        };
        Object.assign(Params, Default);
        return this.SendMsg(Params);
    }

    async SendGroupMsgVoice(Params) {
        let Default = {
            sendToType: 2,
            groupid: 0,
            sendMsgType: "VoiceMsg"
        };
        Object.assign(Params, Default);
        return this.SendMsg(Params);
    }
}
module.exports = { BaseInterface };