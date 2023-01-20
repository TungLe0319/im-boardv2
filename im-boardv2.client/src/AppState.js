import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account[]} */
  profiles: [],
  profileIdToInviteBy: "",
  /** @type {import('./models/Account.js').Account | null} */
  activeProfile: null,

  /** @type {import('./models/GroupsAndGameNight/GroupMembership.js').GroupMemberShip[]} */
  groupMemberShips: [],
  /** @type {import('./models/Inbox.js').Inbox[]} */
  inbox: [],

  /** @type {import('./models/GroupsAndGameNight/Group.js').Group[]} */
  groups: [],

  /** @type {import('./models/GroupsAndGameNight/GroupChat.js').GroupChat[]} */
  groupChats: [],
  /** @type {import('./models/GroupsAndGameNight/GameNight.js').GameNight[]} */
  groupGameNights: [],

  /** @type {import('./models/GroupsAndGameNight/GroupMembership.js').GroupMemberShip | null} */
  activeGroup: null,

  /** @type {import('./models/GroupsAndGameNight/GroupMember.js').GroupMember[]} */
  groupMembers: [],

  /** @type {import('./models/BoardGame/BGList.js').BGList[]} */
  bgLists: [],
  /** @type {import('./models/BoardGame/BGList.js').BGList[]} */
  groupFilteredLists: [],
  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  boardgames: [],
  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  editorsChoiceGames: [],
  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  discountBoardGames: [],
  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  popularBoardGames: [],

  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  PaginationPendingBoardGames: [],

  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame | null} */
  activeBoardGame: null,

  activeImage: null,

  /** @type {import('./models/BoardGame/ActiveBoardGameImage.js').ActiveBoardGameImage[]} */
  activeBoardGameImages: [],

  /** @type {import('./models/BoardGame/ActiveBoardGameVideo.js').ActiveBoardGameVideo[]} */
  activeBoardGameVideos: [],

  /** @type {import('./models/BoardGame/ActiveBoardGamePrice.js').ActiveBoardGamePrice[]} */
  activeBoardGamePrices: [],

  /** @type {import('./models/BoardGame/ABGReviews.js').ABGReviews[]} */
  activeBoardGameReviews: [],

  /** @type {import('./models/BoardGame/ForumPost.js').ForumPost[]} */
  forumPosts: [],

  /** @type {import('./models/BoardGame/BGCategories&Mechanics.js').BGCategories&Mechanics[]} */
  bgCategories: [],

  /** @type {import('./models/BoardGame/BGCategories&Mechanics.js').BGCategories&Mechanics[]} */
  bgMechanics: [],

  queryFilter: [],
  nextQueryFilter: [],

  activeSearchQuery: [],

  activeCategoryFilters: [],
  activeMechanicsFilters: [],
  categoryNames: [],
  homePageBannerUrls: [
    {
      url: "https://biblio.uottawa.ca/sites/biblio.uottawa.ca/files/2019_-_game_collection.jpg",
    },

    {
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftoplayishuman.com%2Fwp-content%2Fuploads%2F2019%2F01%2FIMG_20190130_152747_418.jpg%3Ffit%3D5036%252C2988%26ssl%3D1&f=1&nofb=1&ipt=9e11893fac6ce63d012fa63be477227bf1f90ae9e1d1700105291a01b6d9b874&ipo=images",
    },
    {
      url: "http://gticket.quai10.be/image.aspx?img=movies_photo/30100/jumanji3.jpg",
    },
    {
      url: "https://awesomespace.nl/wp-content/uploads/sites/14/2015/12/game-night-board.jpg",
    },
  ],

  order_By: [
    { name: "rank" },
    { name: "year_published" },
    { name: "name" },
    { name: "min_age" },
    { name: "min_playtime" },
    { name: "max_playtime" },
    { name: "min_players" },
    { name: "max_players" },
    { name: "price" },
    { name: "discount" },
  ],

  articles: [
    {
      name: "Heres why dice were invented",
      coverImg:
        "https://www.grunge.com/img/gallery/heres-why-dice-were-invented/intro-1656601577.webp",
      url: "https://www.grunge.com/912859/heres-why-dice-were-invented/",
      credit: " Alice Minium June 30, 2022",
    },
    {
      name: "The Complete History of Board Games",
      coverImg:
        "https://geekgeargalore.com/wp-content/uploads/2019/11/Ancient-Dice.jpg",
      url: "https://geekgeargalore.com/boardgames/history-of-board-games/",
      credit: "Byron Nov 17, 2019",
    },

    {
      name: "6 Fun Facts About the Original Jumanji",
      coverImg:
        "https://www.sheknows.com/wp-content/uploads/2018/08/pd50yqoqpnwixdnavxuf.jpeg",
      url: "https://www.sheknows.com/entertainment/articles/1137378/fun-facts-about-the-original-jumanji/",
      credit: "Samantha Puc Dec 18, 2017",
    },

    {
      name: "The Most Popular Types of Board Games: Board Game Genres, Explained",
      coverImg:
        "https://whatnerd.com/wp-content/uploads/2020/05/board-game-types-genres-explained-featured.jpg",
      url: "https://whatnerd.com/board-game-genres-explained/",
      credit: "Joel Lee Mar 10, 2021",
    },

    {
      name: "Why Do Board Games Matter?",
      coverImg:
        "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/candyland.jpg",
      url: "https://lovethynerd.com/why-do-board-games-matter/",
      credit: "Mike Perna Feb 18, 2021",
    },
    {
      name: "Board games for your health and well-being",
      coverImg:
        "https://www.mcmasteroptimalaging.org/images/default-source/blog-post-images/istock-988544644.tmb-blogpost.jpg?Culture=en&sfvrsn=1c230cd6_6",
      url: "https://www.mcmasteroptimalaging.org/blog/detail/blog/2020/12/16/board-games-for-your-health-and-well-being",
      credit: "McMaster University Dec 16, 2020  ",
    },
    {
      name: "35 Best Board Games for Kids That the Whole Family Will Enjoy",
      coverImg:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-021022-kid-board-games-1644597723.png?crop=1.00xw:1.00xh;0,0&resize=980:*",
      url: "https://www.goodhousekeeping.com/childrens-products/board-games/g32475624/best-board-games-for-kids/",
      credit: " Marisa Lascala Aug 31, 2022",
    },
    {
      name: "Add to your dice collection, one of our favorite places",
      coverImg:
        "https://wyrmwoodgames.wpenginepowered.com/wp-content/uploads/2022/08/Prismatic-7-Set-v2-scaled.jpg",
      url: "https://wyrmwoodgaming.com/dice-collection/",
      credit: "wyrmwoodgaming.com",
    },
    {
      name: "The Game Clue Was Borne of Boredom During WWII Air-Raid Blackouts",
      coverImg:
        "https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_842/MTU3ODc4Njg0NTgyMzU2Mjk3/image-placeholder-title.webp",
      url: "https://www.history.com/news/clue-game-origin-wwii",
      credit: "Alice Popovici Aug 29, 2018 ",
    },
  ],

  authorImages: [{ name: "Tung", image: "../" }],

  skip: 0,
  nextPage: 0,
  previousPage: 0,
  itsAMaybe: 12,
  hopeItWorks: 0,
  // --------------------//
  nextSet: 0,

  paginationDiscount: 0,
  paginationForumPosts: 0,
});
