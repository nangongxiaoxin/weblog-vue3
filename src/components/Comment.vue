<template>
  <div class="mt-14">
    <h2 class="flex justify-center items-center mb-7 text-gray-500">
      全部评论<span>({{ total }})</span>
    </h2>
    <!-- 卡片 -->
    <div class="w-full px-5 py-10 mb-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <!-- 评论发布表单 -->
      <form>
        <div class="flex gap-3">
          <!-- 头像 -->
          <div>
            <img v-if="commentStore.userInfo.avatar && commentStore.userInfo.avatar.length > 0" :src="commentStore.userInfo.avatar" class="w-10 h-10 rounded-full" />
            <svg v-else class="w-10 h-10 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <!-- 昵称、邮箱、网址、评论内容 -->
          <div class="grow">
            <!-- 昵称、邮箱、网址 -->
            <div class="flex items-center gap-5 flex-row">
              <div class="flex basis-1/3">
                <span class="inline-flex border-e-0 items-center px-3 text-xs text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> 昵称 </span>
                <!-- 昵称 -->
                <input @blur="onNicknameInputBlur" v-model="commentStore.userInfo.nickname" data-tooltip-target="nickname-tooltip-click" data-tooltip-trigger="click" type="text" id="website-admin" class="rounded-none rounded-e-lg border text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-xs border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="必填" /><!-- 昵称 Tooltip -->
                <div id="nickname-tooltip-click" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  输入 QQ 号会自动获取昵称和头像
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div class="flex basis-1/3">
                <span class="inline-flex border-e-0 items-center px-3 text-xs text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> 邮箱 </span>
                <!-- 邮箱 -->
                <input v-model="commentStore.userInfo.mail" data-tooltip-target="mail-tooltip-click" data-tooltip-trigger="click" type="text" id="website-admin" class="rounded-none rounded-e-lg border text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-xs border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="必填" /><!-- 邮箱 Tooltip -->
                <div id="mail-tooltip-click" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  收到回复将会发送到您的邮箱
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div class="flex basis-1/3">
                <span class="inline-flex border-e-0 items-center px-3 text-xs text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> 网址 </span>
                <!-- 网址 -->
                <input v-model="commentStore.userInfo.website" data-tooltip-target="website-tooltip-click" data-tooltip-trigger="click" type="text" id="website-admin" class="rounded-none rounded-e-lg border text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-xs border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="选填" /><!-- 网址 Tooltip -->
                <div id="website-tooltip-click" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  可通过点击头像访问你的网站 (非必填)
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
            <!-- 评论内容 -->
            <div class="w-full mt-4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="发表一个友善的评论吧..." required></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <div class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-600 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-700">发送</div>
                <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                  <!-- Emoji -->
                  <div data-popover-target="popover-emoji" type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h0M9 9h0m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .5 2.4 1.5 3.2a5.5 5.5 0 0 0 7 0c1-.8 1.5-2.2 1.5-3.2 0 0-2 1-5 1s-5-1-5-1Z" />
                    </svg>
                  </div>
                  <!-- Emoji Popover -->
                  <div data-popover id="popover-emoji" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                    <div class="p-2">
                      <div class="grid grid-cols-6 gap-2">
                        <div v-for="(emoji, index) in emojis" :key="index" class="text-2xl hover:cursor-pointer" @click="addEmoji(emoji)">{{ emoji }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <!-- 评论列表 -->
      <div v-if="comments && comments.length > 0" v-for="(comment, index) in comments" :key="index">
        <!-- 一级评论 -->
        <div class="flex gap-3 mt-5">
          <!-- 左边头像栏 -->
          <div>
            <img v-if="comment.avatar && comment.avatar.length > 0" :src="comment.avatar" class="w-10 h-10 rounded-full" />
            <svg v-else class="w-10 h-10 text-gray-400 rounded-full dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
          <!-- 右边评论信息 -->
          <div class="flex flex-col gap-2 grow">
            <!-- 昵称 -->
            <div class="text-xs text-[#FB7299] font-bold">{{ comment.nickname }}</div>
            <!-- 评论内容 -->
            <div class="text-sm dark:text-gray-400">{{ comment.content }}</div>
            <!-- Meta 信息 -->
            <div class="flex items-center text-xs text-gray-400">
              <!-- 发布时间 -->
              <div>{{ comment.createTime }}</div>
              <!-- 一级评论回复 -->
              <div class="text-gray-400 cursor-pointer ml-4 hover:text-sky-600" @click="showReplyForm(index, comment.nickname, comment.id, comment.id)">回复</div>
            </div>
          </div>
        </div>

        <!-- 二级评论 -->
        <div class="ml-12" v-if="comment.childComments && comment.childComments.length > 0">
          <div v-for="(childComment, index2) in comment.childComments" :key="index2">
            <!-- 头像、昵称、评论内容 -->
            <div class="flex items-center gap-3 mt-5">
              <!-- 左边头像栏 -->
              <div>
                <img v-if="childComment.avatar && childComment.avatar.length > 0" :src="childComment.avatar" class="w-6 h-6 rounded-full" />
                <svg v-else class="w-6 h-6 text-gray-400 rounded-full dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <!-- 昵称 -->
              <div class="text-xs text-[#FB7299] font-bold">{{ childComment.nickname }}</div>
              <!-- 评论内容 -->
              <div class="text-sm dark:text-gray-400">{{ childComment.content }}</div>
            </div>
            <!-- Meta 信息 -->
            <div class="ml-9 mt-1 flex items-center text-xs text-gray-400">
              <!-- 发布时间 -->
              <div>{{ childComment.createTime }}</div>
              <!-- 二级评论回复 -->
              <div class="text-gray-400 cursor-pointer ml-4 hover:text-sky-600" @click="showReplyForm(index, childComment.nickname, childComment.id, comment.id)">回复</div>
            </div>
          </div>
        </div>

        <!-- 二级评论回复表单 -->
        <form class="ml-12 mt-5" v-if="comment.isShowReplyForm">
          <div class="flex gap-3">
            <!-- 头像 -->
            <div>
              <img v-if="commentStore.userInfo.avatar && commentStore.userInfo.avatar.length > 0" :src="commentStore.userInfo.avatar" class="w-10 h-10 rounded-full" />
              <svg v-else class="w-10 h-10 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </div>
            <!-- 昵称、邮箱、网址、评论内容 -->
            <div class="grow">
              <div class="flex items-center gap-5 flex-row">
                <div class="flex basis-1/3">
                  <span class="inline-flex border-e-0 items-center px-3 text-xs text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> 昵称 </span>
                  <input @blur="onNicknameInputBlur" v-model="commentStore.userInfo.nickname" data-tooltip-target="nickname-tooltip-click2" data-tooltip-trigger="click" type="text" id="website-admin" class="rounded-none rounded-e-lg border text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-xs border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="必填" />
                  <!-- 昵称 Tooltip -->
                  <div id="nickname-tooltip-click2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    输入 QQ 号会自动获取昵称和头像
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div class="flex basis-1/3">
                  <span class="inline-flex border-e-0 items-center px-3 text-xs text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> 邮箱 </span>
                  <input v-model="commentStore.userInfo.mail" data-tooltip-target="mail-tooltip-click2" data-tooltip-trigger="click" type="text" id="website-admin" class="rounded-none rounded-e-lg border text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-xs border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="必填" />
                  <!-- 邮箱 Tooltip -->
                  <div id="mail-tooltip-click2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    收到回复将会发送到您的邮箱
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div class="flex basis-1/3">
                  <span class="inline-flex border-e-0 items-center px-3 text-xs text-gray-900 bg-gray-100 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> 网址 </span>
                  <input v-model="commentStore.userInfo.website" data-tooltip-target="website-tooltip-click2" data-tooltip-trigger="click" type="text" id="website-admin" class="rounded-none rounded-e-lg border text-gray-900 focus:ring-sky-500 focus:border-sky-500 block flex-1 min-w-0 w-full text-xs border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="选填" />
                  <!-- 网址 Tooltip -->
                  <div id="website-tooltip-click2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    可通过点击头像访问你的网站 (非必填)
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div class="w-full mb-4 mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <!-- 评论回复 textarea -->
                  <textarea id="comment" rows="4" v-model="replyContent" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" :placeholder="replyPlaceholderText" required></textarea>
                </div>
                <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <div class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-sky-600 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-700">发送</div>
                  <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <!-- Emoji -->
                    <div data-popover-target="popover-emoji2" type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h0M9 9h0m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .5 2.4 1.5 3.2a5.5 5.5 0 0 0 7 0c1-.8 1.5-2.2 1.5-3.2 0 0-2 1-5 1s-5-1-5-1Z" />
                      </svg>
                    </div>

                    <!-- Emoji Popover -->
                    <div data-popover id="popover-emoji2" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                      <div class="p-2">
                        <div class="grid grid-cols-6 gap-2">
                          <!-- 评论回复表单中的添加 Emoji 表情 -->
                          <div v-for="(emoji, index) in emojis" :key="index" class="text-2xl hover:cursor-pointer" @click="addReplyEmoji(emoji)">
                            {{ emoji }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCommentStore } from "@/stores/comment";
import { ref, reactive, onMounted, nextTick } from "vue";
import { initTooltips, initPopovers } from "flowbite";
import { getUserInfoByQQ } from "@/api/frontend/comment";

onMounted(() => {
  initTooltips();
  initPopovers();
});

const commentStore = useCommentStore();
// 总评论数
const total = ref(0);
// emojis 表情符号
const emojis = ref(["😃", "😁", "😅", "😂", "😍", "😜", "😝", "🤑", "🥵", "🥰", "😙", "😎", "😵", "😭", "😱", "😖", "🥳", "👽", "🙈", "🤡", "😤", "💣", "💯", "💢", "❤️", "👍", "👏", "👋", "👌", "🤏", "🙏"]);

// 评论回复表单：添加 Emoji
const addReplyEmoji = (emoji) => {
  replyContent.value = replyContent.value + emoji;
};
// 添加 Emoji 表情
const addEmoji = (emoji) => {
    commentForm.content = commentForm.content + emoji
}
// 昵称输入框 blur 事件
const onNicknameInputBlur = () => {
  let nickname = commentStore.userInfo.nickname;
  // 校验昵称是否是纯数字
  if (!checkIfPureNumber(nickname)) {
    return;
  }

  // 若是，请求后端接口，根据 QQ 号获取用户信息
  getUserInfoByQQ(nickname).then((res) => {
    if (!res.success) {
      // 提示错误消息
      showMessage("获取 QQ 信息失败 ", "error");
      return;
    }

    commentStore.userInfo.avatar = res.data.avatar;
    commentStore.userInfo.nickname = res.data.nickname;
    commentStore.userInfo.mail = res.data.mail;
  });
};

// QQ 号校验，是否是纯数字
function checkIfPureNumber(text) {
  const trimmedValue = text.trim();
  return /^\d+$/.test(trimmedValue);
}

// 展示回复表单
const showReplyForm = (index, nickname, replyCommentId, parentCommentId) => {
  // 先将评论数组中一级评论的所有 isShowReplyForm 字段设置为 false
  comments.value.forEach((comment) => (comment.isShowReplyForm = false));
  // 拿到当前下标的评论
  let comment = comments.value[index];
  // isShowReplyForm 置为 true
  comment.isShowReplyForm = true;
  // 动态设置评论回复表单中的 textarea 的 placeholder 提示文字
  replyPlaceholderText.value = "回复 @" + nickname + ":";

  // 动态设置评论回复表单中的 textarea 的 placeholder 提示文字
  replyPlaceholderText.value = "回复 @" + nickname + ":";

  nextTick(() => {
    initPopovers(), initTooltips();
  });
};

// 回复 textarea 的 placeholder 提示文字
const replyPlaceholderText = ref("发表一个友善的评论吧...");

// 回复的评论
const replyContent = ref("");

// 评论数组
const comments = ref([
  {
    id: 39818,
    avatar: "https://qh.qlogo.cn/g?b=sdk&ek=AQCCUxlJ6SzcyLnoceicwiaOoqHLfHPDJ48xj7dsbLzfP3LPC0YFw9ibWW1UaIicy2vIIZvUpLDf&s=100&t=1690161385",
    nickname: "野比大雄",
    website: null,
    content: "头像和昵称可以自动获取了\uD83D\uDE03",
    createTime: "2024-03-09 09:33:46",
    replyNickname: null,
    childComments: [],
    isShowReplyForm: null,
  },
  {
    id: 39813,
    avatar: "https://qh.qlogo.cn/g?b=sdk&ek=AQDW4PNnLEibrRIicSnnZZrBD2siaNCiaiaQec1LEccHQRM7IJun9EAoLh4vU0iasibTHjTKbCFic1VC&s=100&t=1593000563",
    nickname: "璞暮",
    website: null,
    content: "观望\uD83E\uDD11",
    createTime: "2024-03-06 13:41:56",
    replyNickname: null,
    childComments: [
      {
        id: 39814,
        avatar: "https://qh.qlogo.cn/g?b=sdk&ek=AQAJ99lfkKA9TldbMpTOicsyfib30JOuNnqdaFehfOzYz8qEQo3f7JbY24mCKYoZ5meJibLeuDq&s=100&t=1681803828",
        nickname: "犬小哈",
        website: null,
        content: "欢迎欢迎\uD83D\uDE0E",
        createTime: "2024-03-07 11:52:30",
        replyNickname: null,
        childComments: null,
        isShowReplyForm: null,
      },
    ],
    isShowReplyForm: null,
  },
]);
</script>