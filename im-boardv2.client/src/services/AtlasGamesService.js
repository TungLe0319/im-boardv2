import { atlasApi } from './AxiosService.js';
import { BoardGame } from '../models/BoardGame/BoardGame.js';
import { ActiveBoardGameImage } from '../models/BoardGame/ActiveBoardGameImage.js';
import { ActiveBoardGameVideo } from '../models/BoardGame/ActiveBoardGameVideo.js';
import { AppState } from '../AppState.js';
import { ABGReviews } from '../models/BoardGame/ABGReviews.js';
import { ActiveBoardGamePrice } from '../models/BoardGame/ActiveBoardGamePrice.js';
import { router } from '../router.js';
import { ForumPost } from '../models/BoardGame/ForumPost.js';
import { BGList } from '../models/BoardGame/BGList.js';
import { BGCategoriesAndMechanics } from '../models/BoardGame/BGCategories&Mechanics.js';
import Pop from '../utils/Pop.js';

//  client_id: '2I6DeypMLL';
class AtlasGamesService {
  //MAIN ONE USED ON SEARCH PAGE
  async getBoardGames(query = '') {
    let nextSet = AppState.nextSet
    const res = await atlasApi.get(`api/search?${query}`, {
      params: {
        client_id: '2I6DeypMLL',
        limit: 48,
        skip: nextSet
      },
    });
  
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));

    
  }

  //NOTE - FOR FILTER SIDE BAR
  async getBoardGamesByOrder_By(x) {
    let nextSet = AppState.nextSet;
  
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        order_by: x,
        limit: 25,
        skip: nextSet,
      },
    });

    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  // SECTION ---------------- FOR HOME PAGE---------------------
  async getBoardGamesByDiscount() {

    let nextSet = AppState.paginationDiscount;
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',

        limit: 6,
        gt_discount: 0.5,
        skip: nextSet,
      },
    });

    AppState.discountBoardGames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByPopularity() {
    let nextSet = AppState.nextSet;
    // AppState.popularBoardGames = []
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        limit: 6,
        skip: nextSet,
      },
    });
    AppState.popularBoardGames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByPrice() {
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        lt_price: 20,
      },
    });

    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async filterBoardGamesByDiscount() {

    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',

        limit: 25,
        gt_discount: 0.5,

      },
    });
  
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByIds() {
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        limit: 12,
        ids: 'Y2CAqTW0oJ,19C9ka2hEx,LZCLTdcQqP,4G32qGJZWs,lhbalXxjSr,6cq7DnBCh1,M8JSS7lEFH,M7r9tO1GbX,dkX7iNZDpx,H3yXWu5No0,jNwFeaejzT,0DAMHQym7H,gQSIuVNdby,qR4PtpO8X,gvhGefZQBd,FrJKlkJlhN,voKGlqZsRo',
      },
    });
    //one night werewolf,coup,skullking,arkham horror,anomia,liar's dice,love letter premium,tokaido,quacks,oregon trail,dixit,starwars xwing,caverna,inhumane conditions,scythe,dune,mental blocks,funemployed
    AppState.editorsChoiceGames = res.data.games.map((b) => new BoardGame(b));
  }

  //-----------------------------!SECTION-----------------------------------------------------------

  async getBoardGamesByQuery(name = '') {
  
    router.push({ name: 'Search' });
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        // fuzzy_match: true,
        name: name,
        limit: 48,
      },
    });
 
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));

  }

  async getBoardGamesByMechanics(mechanics = '') {

    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        mechanics: mechanics,
        limit: 60,
      },
    });

    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGameDetailsById(id) {
    AppState.activeBoardGame = null;
    const res = await atlasApi.get(`/api/search?${id}`, {
      params: {
        client_id: '2I6DeypMLL',
        ids: id,
      },
    });

    AppState.activeBoardGame = new BoardGame(res.data.games[0]);
   
  }

  async getBoardGameImagesByGameId(id) {
    const res = await atlasApi.get(`api/game/images?`, {
      params: {
        client_id: '2I6DeypMLL',
        game_id: id,
      },
    });
   
    AppState.activeBoardGameImages = res.data.images.map(
      (a) => new ActiveBoardGameImage(a)
    );
  
  }
  async getBoardGamePricesByGameId(id) {
    const res = await atlasApi.get('api/game/prices?', {
      params: {
        client_id: '2I6DeypMLL',
        game_id: id,
      },
    });
  
    AppState.activeBoardGamePrices = res.data.gameWithPrices.us.map(
      (p) => new ActiveBoardGamePrice(p)
    );
   
  }
  async getBoardGameVideosByGameId(id) {
    const res = await atlasApi.get('api/game/videos?', {
      params: {
        client_id: '2I6DeypMLL',
        game_id: id,
      },
    });
    
    AppState.activeBoardGameVideos = res.data.videos.map(
      (a) => new ActiveBoardGameVideo(a)
    );
   
  }

  async getBoardGameReviewsByGameId(id) {
    const res = await atlasApi.get('api/reviews', {
      params: {
        client_id: '2I6DeypMLL',
        game_id: id,
        include_summary: true,
        description_required: true,
      },
    });

 

    AppState.activeBoardGameReviews = res.data.critics.reviews.map(
      (r) => new ABGReviews(r)
    );
 
  }

  async getBoardGameCategoriesList() {
    const res = await atlasApi.get('api/game/categories', {
      params: {
        client_id: '2I6DeypMLL',
      },
    });
   
    AppState.bgCategories = res.data.categories.map(
      (b) => new BGCategoriesAndMechanics(b)
    );

  }

  async getBoardGameMechanicsList() {
    const res = await atlasApi.get('api/game/mechanics', {
      params: {
        client_id: '2I6DeypMLL',
      },
    });
   
    AppState.bgMechanics = res.data.mechanics.map(
      (b) => new BGCategoriesAndMechanics(b)
    );
   
  }

  // SECTION FORUM POSTS ---------------------------!SECTION

  async getForumPosts() {
    let next = AppState.paginationForumPosts
    const res = await atlasApi.get('api/forum', {
      params: {
        client_id: '2I6DeypMLL',
        limit: 100,
        news: true,
        skip: next
      },
    });

    AppState.forumPosts = res.data.posts.map((f) => new ForumPost(f));
  
  }
}

export const atlasGamesService = new AtlasGamesService();
