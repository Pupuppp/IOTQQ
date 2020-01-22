const { BaseInterface } = require("./api");

current = "";
Host = ""
Test = new BaseInterface(Host);
Test.SetCurrentQQ(current);

const TestSendMsgFriend = async Params => {
    switch (Params.type) {
        case "TextMsg":
            Result = await Test.SendFriendMsgText(Params.data)
            console.log(Result)
            break;
        case "PicMsg":
            Result = await Test.SendFriendMsgImage(Params.data)
            console.log(Result)
            break;
        case "VoiceMsg":
            Result = await Test.SendFriendMsgVoice(Params.data)
            console.log(Result)
            break;
    }
};
/* TestSendMsgFriend({
    type: "TextMsg",
    data: {
        content: "text",
        toUser: 1283150390,
        atUser: 0
    }
}) */


/* TestSendMsgFriend({
    type: "PicMsg",
    data: {
        content: "text",
        toUser: 1283150390,
        atUser: 0,
        picUrl: "https://www.baidu.com/img/baidu_jgylogo3.gif",
        picBase64Buf: "",
        fileMd5: ""
    }
}) */


/* TestSendMsgFriend({
    type: "VoiceMsg",
    data: {
        content: "text",
        toUser: 1283150390,
        atUser: 0,
        voiceUrl: "https://www.runoob.com/try/demo_source/horse.mp3",
        voiceBase64Buf: ""
    }
}) */


const TestSendMsgGroup = async Params => {
    let Result;
    switch (Params.type) {
        case "TextMsg":
            Result = await Test.SendGroupMsgText(Params.data)
            console.log(Result)
            break;
        case "PicMsg":
            Result = await Test.SendGroupMsgImage(Params.data)
            console.log(Result)
            break;
        case "VoiceMsg":
            Result = await Test.SendGroupMsgVoice(Params.data)
            console.log(Result)
            break;
    }
};


/* TestSendMsgGroup({
    type: "TextMsg",
    data: {
        content: "text",
        toUser: 1021213099,
        atUser: 0
    }
})
 */
/* TestSendMsgGroup({
        type: "PicMsg",
        data: {
            content: "text",
            toUser: 1021213099,
            atUser: 0,
            picUrl: "https://www.baidu.com/img/baidu_jgylogo3.gif",
            picBase64Buf: "",
            fileMd5: ""
        }
    }) */

/* TestSendMsgGroup({
    type: "VoiceMsg",
    data: {
        content: "",
        toUser: 1021213099,
        atUser: 0,
        voiceUrl: "https://www.runoob.com/try/demo_source/horse.mp3",
        voiceBase64Buf: ""
    }
}) */


const TestGetFriendList = async(Params) => {
    let res = await Test.GetFriendList(Params);
    console.log(res);
};
/* TestGetFriendList({ StartIndex: 200 }); */



const TestGetGroupList = async(Params) => {
    let res = await Test.GetGroupList(Params);
    console.log(res);
};
/* TestGetGroupList({NextToken:""});
 */

const TestGetClusterInfo = async() => {
    let res = await Test.GetClusterInfo();
    console.log(res);
};
/* TestGetClusterInfo(); */

const TestGetGroupUserList = async(Params) => {
    let res = await Test.GetGroupUserList(Params);
    console.log(res);
};

/* TestGetGroupUserList({
    GroupUin: 578063690,
    LastUin: 0
}) */

const TestQQZan = async(UserID) => {
        let res = await Test.QQZan(UserID);
        console.log(res);
    }
    /* TestQQZan({UserID:2934068293}) */
const TestGetBalance = async() => {
        let res = await Test.GetBalance();
        console.log(res);
    }
    /* TestGetBalance() */

const TestAddQQUser = async(Params) => {
    let res = await Test.AddQQUser(Params);
    console.log(res);
}

/* TestAddQQUser({ "AddUserUid": 1283150390, "FromGroupID": 0, "AddFromSource": 2005, "Content": "加好友，互助浇水" }) */

const TestQzonePublish = async(Params) => {
        let res = await Test.QzonePublish(Params);
        console.log(res);
    }
    /* TestQzonePublish({ "DeviceType": "iPod5,1", "Content": "测试空间图文", "PicUrl": ["http://imgcache.qq.com/ac/qqweather/image/2020/6/27.png?ptype=lunar"] }) */

const TestRevokeMsg = async(Params) => {
        let res = await Test.RevokeMsg(Params);
        console.log(res);
    }
    /* TestRevokeMsg({ "GroupID": 1021213099, "MsgSeq": 76, "MsgRandom": 1053578504 }) */
const TestRefreshKeys = async() => {
        let res = await Test.RefreshKeys();
        console.log(res);
    }
    /* TestRefreshKeys() */
const TestShutUp = async(Params) => {
        let res = await Test.ShutUp(Params)
        console.log(res);
    }
    /* TestShutUp({ "ShutUpType": 1, "GroupID": 1021213099, "ShutUid": 15, "ShutTime": 60 }) */

const TestAnnounce = async(Params) => {
        let res = await Test.Announce(Params)
        console.log(res);
    }
    /* TestAnnounce({ "GroupID": 1021213099, "Title": "1", "Text": "1", "Pinned": 0, "Type": 20 }) */

const TestLogOut = async() => {
        let res = await Test.LogOut()
        console.log(res);
    }
    /* TestLogOut() */

const TestGetUserCook = async() => {
        let res = await Test.GetUserCook()
        console.log(res);
    }
    /* TestGetUserCook() */
const TestDealFriend = async(Params) => {
        let res = await Test.DealFriend()
        console.log(res);
    }
    /* TestDealFriend() */

const TestModifyGroupCard = async(Params) => {
        let res = await Test.ModifyGroupCard()
        console.log(res);
    }
    /* TestModifyGroupCard() */
const TestAnswerInviteGroup = async(Params) => {
        let res = await Test.AnswerInviteGroup()
        console.log(res);
    }
    /* TestAnswerInviteGroup() */

const TestSetUniqueTitle = async(Params) => {
    let res = await Test.SetUniqueTitle()
    console.log(res);
}

/* TestSetUniqueTitle() */