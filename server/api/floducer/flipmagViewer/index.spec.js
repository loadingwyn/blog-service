
// import { expect } from 'chai';
import request from 'supertest';
import app from '../../../../server';

describe('/api/floducer/flipmag-viewer', function () {

  this.timeout(7000);

  it.skip('/actions/update-feed', function (done) {
    this.timeout(30000);
    // {
    //   status: 0,
    //   feed: [{
    //   }],
    // }
    //
    // {
    //   status: -1,
    //   message: '',
    // }
    request(app)
      .get('/api/floducer/flipmag-viewer/actions/update-feed')
      .query({
        remoteId: 'flipboard/curator%2Fmagazine%2Ff1q_n2i8SYuhTrMTPWqlrg%3Am%3A211952945',
        limit: 30,
        enableChinaAPI: false,
      })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${process.env.FL_FLODUCER_TEST_ADMIN_TOKEN}`)
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        if (err) {
          return done(err);
        }
        const body = res.body;
        if (body.status) {
          return done(new Error(body.message));
        }
        if (!body.feed.length) {
          return done(new Error('Wrong feed'));
        }
        const posts = body.feed.filter(item => {
          return item.type === 'post';
        });
        if (posts.length < 1) {
          return done(new Error('No post'));
        }
        const section = body.feed[0].section;
        if (!section.title) {
          return done(new Error('No section'));
        }
        return done();
      });
  });

  it.skip('/actions/view-detail', function (done) {
    request(app)
      .post('/api/floducer/flipmag-viewer/actions/view-detail')
      .set('Authorization', `Bearer ${process.env.FL_FLODUCER_TEST_ADMIN_TOKEN}`)
      .send({
        title: '童年与吃',
        date: '2016年8月2日',
        author: '宋小报',
        rssText: '<script>var flip_images = {"http://cdn.flipboard.com/doubanio.com/4ef9aef53d6c5247b2e6d744cb01f02c641fe20c/thumbnail.jpg":{"width":240,"height":180},"https://img3.doubanio.com/view/presto/medium/public/363303.jpg":{"width":544,"height":408}};</script>↵<div id="flip_rss_body">  <div class="json_content" depth="1">↵    <div id="content">↵      <div class="content_img">↵        <div fl:hint-main-image="true" class="still rgb-131-84-57 photo focus-272-204 domcolor-5cc31d-449626-863628-adda56-316b22-57201d-a96f4d-6cb559-3a1816-24451c-b7e2aa-e0f6e3 color img">↵          <img src="https://img3.doubanio.com/view/presto/medium/public/363303.jpg" data-size="medium" width="544" height="408" original-width="544" original-height="408" hints="color,domcolor-5cc31d-449626-863628-adda56-316b22-57201d-a96f4d-6cb559-3a1816-24451c-b7e2aa-e0f6e3,focus-272-204,photo,rgb-131-84-57,still" fl:hint-main-image="true"/>↵        </div>↵      </div>↵      <p>↵        嘴馋是每个孩子的天性。吃对于孩子们来讲，大概也正是他们认识世界的一种途径。小时候，只要手头稍微有点闲钱，便总忍不住往商店里钻。↵      </p>↵      <p>↵        那时在商店里所买过的零食有：↵      </p>↵      <p>↵        唐僧肉：其实是果脯，酸酸甜甜的，前两天在网上看到有一种辣条也叫唐僧肉，但记忆中却不太记得吃过它们；↵      </p>↵      <p>↵        仙丹：忘了名字里，总之是叫xx丹之类的，形状为黑褐色的圆丸，每颗绿豆大小，吃起来有点像山楂的味道；↵      </p>↵      <p>↵        糖豆：一般打针的时候才能吃到。小时候怕疼，打针时死活不肯老老实实地撅着屁股来上一针，大人劝慰时便总说，不疼！打完给你吃糖豆。不疼是骗鬼，糖豆倒是真甜的；↵      </p>↵      <p>↵        果丹皮：其实也就是山楂片；↵      </p>↵      <p>↵        方便面：方便面对于小时候的我们算是比较奢侈的了，需五毛钱一袋，我们姐弟几人偶尔会买来一袋，分着吃，你一撮，我一撮，三下两下便是没有的了，当然是吃不过瘾的。最开始我们那里卖的只有北京方便面和南德方便面，南德方便面适合干着吃，非常酥脆，大概面里还加了什么调料，吃起来有香辣味道，北京方便面则要显得稍稍皮实些。但无论是北京方便面还是南德方便面，我们一般都是直接干着吃的，并且打心眼儿里觉得都是十分好吃的。常常面吃完了之后，袋子里的调味料也要吃上好几天，往手心里倒上一点，可用舌尖舔着吃，也可就着馒头吃，同样是难得的美味。还有一种天方方便面，只在电视里见过，那广告是两个孩子趴在桌子上吃着方便面，然后是天方方便面的画面旋转着，由小到大，一个女声说着&ldquo;天方，天方，数天方，味真香&rdquo;，最后两个孩子冲着屏幕愉快地伸了个大拇指。那时候心里很好奇，不知道是否像她说的那般香，不过可惜的是在现实中一次也没有吃到过。↵      </p>↵      <p>↵        其他的还有许多，但因为时间久远，记忆中已经很模糊了。当然，因为那时候的家里十分拮据，买到的零食是很少的，真正吃得多的，要么是爸爸或是姐姐打工回来时捎的礼物，要么就是田野里自己寻来的野物了。↵      </p>↵      <p>↵        我出生的时候，大姐已经十多岁了。于她小时候的模样，我脑中是模糊的，我记事起，她便已经是个大姑娘了，辍了学去外面打工。每每打电话回来，我们总要穿过大半个村庄，去大（爸的堂兄）家跟她通电话。我记挂她，是因为她回来时总会给我们带许多好吃的，炸蚕豆、五香花生&hellip;&hellip;好多，那都是我们在村子里不曾见过的。特别是五香花生（我不确定是不是叫这个名字，带着壳），尤为好吃&mdash;&mdash;入了嘴，一嚼，咸的甜的丝丝缠绕，那味道，只如一抹烟霞绕着人，舌尖滋儿滋儿地仿佛便要生出一个新的世界来。那时，上学时，总会抓一把塞在口袋里，忍不住了，就拿出一颗来剥，剥好后放进嘴里，总舍不得立刻嚼，总要吸溜吸溜地含在嘴里好一会儿。这么好吃的东西，当然要在别的小伙伴们面前得瑟了，但自己说得口水直流，于他们却是一脸茫然模样：好吃？有哪样的好吃？不就是花生嘛！又不是没吃过！所以，为了让他们有切身的感受，让他们切切实实地羡慕我，便只得各人给他们取出一颗来尝尝，给的当口儿，眼睁得大大的盯着他们瞧：&ldquo;怎么样？是不是可好吃？&rdquo;↵      </p>↵      <p>↵        待他们吸溜着口水，一副大梦方醒的憧憬模样道：&ldquo;嗯嗯，真的可好吃！&rdquo;那时候，整个小心脏便也得到了巨大的满足。可是，再好吃也没用的，我可舍不得再给了。现在想来，那会儿实在是坏得不行。↵      </p>↵      <p>↵        三姐去上初中了之后，每每过星期天的时候也常常会带好吃的回来，有山楂片、辣条、五香豆、朱古力豆&hellip;&hellip;印象最深的是猫耳朵，那同样是之前从未吃到过的美味，看它，一片一片，边缘处微微蜷着，真的便如一只耳朵那般。它们通体黄褐色，乍看，并不多么显眼，但入到嘴里却别是一翻滋味：硬硬的，脆脆的，咬一口，咔嘣响，碎片溅得口腔每个角落里都是，一嚼，只感头皮劈啪啪一阵响，毫毛倒立，浑身每个毛孔都张开。让人不禁把眼闭着，深深地吐一口气出来，叹一声：啊，真好吃呀！↵      </p>↵      <p>↵        还有桑葚果。讲起来它其实算不得什么稀罕东西，但因为每次抢到的少，倒也使人记忆颇深。那时候，离我家一宅之地，是个坑，我们称之为后坑。之前说过的建x就在后坑边上住着。他家屋后有棵桑葚树，杯口粗细，夏日时节，每每结着大颗小颗的桑葚果，繁多如骤雨，每每招惹得孩子们徘徊不断。正是因为人多果少，所以，真正可以吃到的年份是少的，大多时候，跑去一看，满树皆青，好容易思量着有几颗这几日该熟了，但再去看时，却早已被别人抢了先，摘跑了。只一次，大家似乎尽皆把它忘掉了，我跟三姐站在树下，阳光透过苍翠的叶子打下来，照在那满树紫色的桑葚果上，使它们显得愈发娇艳欲滴，在午后的炎气里，似乎还凝着粒粒水珠、冒着丝丝凉气，于是喜不自禁地攀着旁边的枝干去摘，往嘴里一放，那一包凉、那一缕甜、那一阵酸便都弹着溅着涌着冒着挤挤挤挨挨不绝，胀了人满嘴。于是再摘再吃，不大一会儿，便是满嘴紫乌，只跟妖怪相似。那是第一次吃到过瘾。后来，牙实在酸得厉害，再吃不下，便又摘了多大一捧方才回了家中。↵      </p>↵      <p>↵        讲到这里，不禁又使我想起麦收时节吃的冰糕，那时候天地间热气翻涌，难耐异常，分明已是盛夏模样了。我们头戴竹帽，手握镰刀，金黄的麦子经过长时间的对视，早撤去了那层诱人的金黄，只剩下糙如尘埃的土黄，干涩，单调，无止无尽。于是抬起头，舔舔干裂起皮的嘴片，吐口黏痰，四围望望，只感天地荒荒漠漠，炎气熏蒸。云脚缓慢移过，地头的杨树叶子稀落落晃动着，泛着明似溪水的光，钻天猴（一种鸟，不知学名，也可能就是叫天子，只在麦收时节出现，飞的时候喜欢径直往天空里钻，不似其他鸟雀那般天地间四处横飞，并且飞时滴零零叫着，一直不绝）的叫声像铃铛一样撒了人满耳，擦擦额头的汗，而身上的衣服，亦早已湿透，贴背脊肚皮上了。↵      </p>↵      <p>↵        远远地，看到卖冰棍的少年来了，推着一辆稍显破旧的自行车，后座上驮着一个四四方方的木箱，上面插着几根冰棍的胶袋，阳光下猎猎招展。于是那股凉气，顿时也便从那不知名的虚空里沁过来了，丝丝漫涌，贴着人肌肤游走。接过妈妈或是姐姐他们递过来的毛票，去到他旁边，看他掀了木盖，一股真切的凉意迎面扑来。待冰棍入了口，只感格格喳喳一阵响，热气如干皮崩脱（虽然它们马上就又回来了，但只那一瞬也总是好的），冰棍具体味道倒不记得了，只是贪图那份凉，那同样是让人想起来格外怀念的。↵      </p>↵      <p>↵        还有凉调豆腐也是十分好吃的，那多是早上，驮着豆腐担子的老者一声一声地吆喝着：&ldquo;割～豆腐&hellip;&hellip;割～豆腐&hellip;&hellip;&rdquo;他开首喊&ldquo;割&rdquo;字的调子极高极长，后面的&ldquo;豆腐&rdquo;二字被拖得慢悠悠的，最后倒如两颗珠子似的一顿一滑剥了出来。用白瓷碗盛得一碗黄豆出去，看卖豆腐的老者揭开覆盖在豆腐上的黯黄遮布，那豆腐在晨气里，因了万物映照，显得白嫩异常，还冒着丝丝的热气。这时候，只见那老者用那薄薄的刀片在豆腐块上一横一竖各划了一下，豆腐便切好了，之后被他用手一掰一握便已入了秤盘中了，提溜个秤锤一分一毫地把着斤两。这时候，他透过秤杆看看我们发馋的眼睛，撇着嘴笑笑，边把切好的豆腐的斤两补足便对妈妈说道：&ldquo;要不要来个凉调哩？小孩儿们稀罕吃！&rdquo;有时候，妈妈瞧我们实在馋得紧，便会满足我们一次。看妈妈答应了，那卖豆腐的也同样是十分欢喜的，这样他的豆腐也会多卖掉一些的。于是他将豆腐三下两下切成大小相当的小块状，盛在碗里，取过车把上自制的辣子酱，往豆腐上酣畅淋漓地一浇。那辣子酱火红火红的，衬了那鲜白的豆腐更是显得艳丽，让人一看到口水便不禁流了出来。当然，吃起来自然也是十分鲜美的。↵      </p>↵      <p>↵        还有爆米花。炸爆米花时称得上村中的盛事，几乎小半个村子的人们都会参与进来，尤其是有孩子的人家，因为玉米家家户户都有，花不了多少钱便可以满足孩子们许多天的口欲，所以，大人们都是乐于兜些玉米出来给孩子们解解馋，同时也给自己在无活天气消磨光阴的时候增加一项乐趣。炸爆米花的情景以前同样是写过许多次的：只见一个手艺人一手摇着一个葫芦模样的铁炉，黑黝黝的，一手摇着一个呼噜呼噜乱响的鼓风机，自里面吹出的风将铁炉下方的小火苗吹得像夏日里簇簇拔节生长的杂草一样，你挤我拥往上窜着，旁边团团围站着等炸爆米花的大人和口水直流的孩子，孩子们等着抢食地上崩落而出的爆米花，大人们则看着那个黑炉指指点点，开一些有些荤的玩笑话。↵      </p>↵      <p>↵        印象最深的是要起炉的那一刻，那时候，吹风机骤然停了下来，那火苗瞬间也便稀了，薄了，仿佛一张透明的纸似的，很轻，仿佛并不具备一点威力似的。与此同时，那手艺人却将那个黑炉提了起来，放在了一个长条布袋的口处。孩子吓得尖叫一声慌忙捂上了耳朵，一面有些怕，一面又想靠得近些，好看清楚。那手艺人看看，嘴角露出一丝得意的笑，一副极为勇武的样子，然后，脚下一用力，&ldquo;嘭&rdquo;，一声巨响，一股白烟瞬间蔓延开来，来不及看清更多，孩子们早已一窝蜂窜到了他周围，如一群抢食的小鸡似的，你争我夺，瞬间便把那些崩落在地上的爆米花捡拾了个一干二净。更多的则入了袋子。看去，金光光白灿灿的一片，衬着那灰褐色的土地，显得灿烂异常，趁热取一朵来放入嘴中，&ldquo;咔喳&rdquo;一声咬下去，脆且软，香气十足。这在许多年后的今天忆起来，仍是使我觉得回味不尽。↵      </p>↵      <p>↵        另外，春日的田野里，豌豆也同样是极为好吃的，清莹莹的果荚，果粒还只绿豆大的一点，那果荚却是肥硕的，扯一个下来，在手掌上胡乱擦一擦，往嘴里一填，一嚼，那股青气，那股脆劲儿，还有那股甜味，真的跟春日里解了冻的溪流相似，让人每每眼前现出一片蓝莹莹的天空来，下面是绿油油的作物，旁边流着一条清凌凌的小溪，阳光一闪一闪。但让人极为郁闷的是，大了些之后却再未吃到过，让人每每仿佛丢失了一个春天。↵      </p>↵      <p>↵        除此之外，麦子吐穗时节，青青的麦粒也同样是十分好吃的。在田野里玩耍时，捡穗大粒饱的麦棵扯来几穗，之后放在掌窝里揉搓几次，麦粒便与麦糠脱离了，吹去青色的麦糠，那麦粒一颗颗地堆在手心里，绿莹莹的，饱满硕大，经阳光一照，更显得清凉剔透，口水不自觉已在口腔里泌了出来。于是张开嘴，整口吞下，一股清香扑鼻弥漫，咬一口，那一颗颗的麦粒便似一颗颗的水珠，稍稍有力便破了，流出带些甜味的汁水，同时那清香也变得更盛了。这时候有白色的蝴蝶在郁绿一片的麦田上空，一朵一朵地飞着，风儿微微吹动额发，一只燕子从头顶掠过时嘁喳喳叫了几声。↵      </p>↵      <p>↵        因为天气开始变得炎热，汗流过多，上学时候，我们常常会从家里带瓶白开水。但白开水的味道实在太过寡淡，让人简直难以下咽。我们常常便会在小卖铺买些快糖（不晓得名字到底叫什么，白色，形状和大小都有点像米粒），一毛钱一包，里面大概有十多粒，捏两粒放在水瓶里面，狠命摇一摇，待糖粒化了，那水喝起来便甜滋滋的，很好喝。我们贪那甜味，常常忍不住喝一口，又一口，不及多大会儿的功夫，一瓶子水便已经喝完了。待后来再渴时，只得在校外的村子里找井水来喝，喝时，温热的水是不肯喝的，总得在压井上多压几次，待那炸凉的水被压出来了时，才趴在出水的铁嘴上，轮流着各自喝个饱足，有些井水是甜的，同样是十分好喝的。有时，上学途中，我们剥了麦粒，并不立刻吃，而是统统丢入到放了快糖的开水里面，麦粒经过开水浸泡，会变得更加饱满，糖水里同样会带上一股麦子的清香。但是麦粒吃起来却没有刚剥出来的新鲜了，反倒有了股浊气。↵      </p>↵      <p>↵        除此之后，其他一些让人印象深的吃的还有许多，待以后有机会了再接着说吧。↵      </p>↵    </div>↵  </div>↵</div>↵',
        sourceURL: 'https://moment.douban.com/post/142713/?douban_rec=1',
        feedTitle: '一刻',
        language: 'zh-cn,h=0',
        custom: 'syszh',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        if (err) {
          return done(err);
        }
        const body = res.body;
        if (body.status) {
          return done(new Error(body.message));
        }
        if (!body.url) {
          return done(new Error('No url'));
        }
        return done();
      });
  });

});
