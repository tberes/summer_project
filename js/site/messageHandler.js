var forumMessages = [];

function sendMessage() {
    var currentMessage = $("#message-field").val();

    forumMessages.push({userName: userName, message: currentMessage});

    $("#message-wrapper").append(
        '<div class="message just-added"><div class="sender-img"></div><h4 class="sender-name">' + userName + '</h4><p class="content">' + currentMessage + '</p></div>'
    );

    $("#message-field").val("");
    $("#message-wrapper").animate({ scrollTop: $("#message-wrapper").prop("scrollHeight") }, 'slow');
}

function listMessages() {
    for (var i = 0; i < forumMessages.length; i++) {
        var message = forumMessages[i];

        $("#message-wrapper").append(
            '<div class="message"><div class="sender-img"></div><h4 class="sender-name">' + message.userName + '</h4><p class="content">' + message.message + '</p></div>'
        );
    }
}