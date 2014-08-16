var ATTACHMENTS_KEY = '&';

var dom = require("./dom");

module.exports = attach;

function attach (brick, attachment) {
  if (attachment.embedsBrick) attachment = attachment.brick;
  if (!brick.attachments) brick.attachments = {};
  if (!brick.attachments[attachment.key]) brick.attachments[attachment.key] = [];

  attachment.parent = brick;

  if (brick.dom[ATTACHMENTS_KEY][attachment.key]) {
    attachment.dom = brick.dom[ATTACHMENTS_KEY][attachment.key];
    dom.setup(attachment);
  }

  brick.attachments[attachment.key].push(attachment);

  return attachment;
}
