const googleMapsApi = "AIzaSyBb3Rs2GnORbX7-1R4xxSlgWrlXNo-W-Qg";

const eventsList = [
    {
        imageUrl: "https://habrastorage.org/getpro/habr/post_images/1cf/d63/ae6/1cfd63ae6b68d59325ef90cc4ea93f35.png",
        title: "OpenAI Conference",
        description: "OpenAI conference including JetBrains, Amazon, Facebook",
        participants: "20/50",
        date: "20 May, 2020",
        rating: 4.5
    },
    {
        imageUrl: "https://avatars.yandex.net/get-music-content/2114230/01d7a5a9.p.36762/m1000x1000",
        title: "Green Day Show",
        description: "Green Dat concert in Belarus, Minsk",
        participants: "670/1000",
        date: "21 May, 2020",
        rating: 4.2
    },
    {
        imageUrl: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
        title: "Van Gogh Exhibition",
        description: "Exhibition of the Van Goghs masterpieces",
        participants: "Not limited",
        date: "21 May, 2020",
        rating: 4.0
    },
    {
        imageUrl: "https://i.ytimg.com/vi/6JqhxxuWVkg/maxresdefault.jpg",
        title: "Math with Savvateev",
        description: "Conference for students with famous Alex Savvateev",
        participants: "30/100",
        date: "22 May, 2020",
        rating: 3.7
    },
]


const groupsList = [
    {
        imageUrl: "https://c8.alamy.com/comp/X98CYK/group-of-teenage-friends-playing-volleyball-on-beach-X98CYK.jpg",
        title: "Playing Volleyball",
        description: "We are searching for three players who wants to play volleyball and to have a good time)",
        participants: "9/12",
        date: "21 May, 2020",
        rating: 3.8,
        creator: {
            creatorName: "Antony Phillips",
            creatorId: "1234",
            avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
        }
    },
    {
        imageUrl: "https://irinazaitseva.com/images/gallery/726-l.jpg",
        title: "Creating a mixer!",
        description: "If there are girls, who want to spend some quality time in a company of 3 man - then join)",
        participants: "3/6",
        date: "22 May, 2020",
        rating: 4.1,
        creator: {
            creatorName: "Victor Aldini",
            creatorId: "123412",
            avatarUrl: "https://randomuser.me/api/portraits/men/38.jpg"
        }
    },
    {
        imageUrl: "https://shawglobalnews.files.wordpress.com/2015/03/fake-tickets.jpg?quality=70&strip=all&w=720&h=379&crop=1",
        title: "Going to Cinema!",
        description: "Well, we are actually having two extra movie tickets and searching for someone to come with us in order to not waste them)",
        participants: "2/4",
        date: "21 May, 2020",
        rating: 4.0,
        creator: {
            creatorName: "Eric Johnson",
            creatorId: "12421214",
            avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
        }
    },
    {
        imageUrl: "https://d2otcp20hyujm8.cloudfront.net/wp-content/uploads/2019/02/28124548/kuKTWJ3-Imgur-1024x684.jpg",
        title: "Playing Games",
        description: "We are holding a tabletop party and are welcome to everyone who wants to join!)",
        participants: "10/15",
        date: "22 May, 2020",
        rating: 3.5,
        creator: {
            creatorName: "Andrew Wiggins",
            creatorId: "12345",
            avatarUrl: "https://randomuser.me/api/portraits/men/24.jpg"
        }
    },
]

const categoriesList = [
    {
        category: "Sport",
        imageUrl: "https://pic.sport.ua/images/news/0/10/106/orig_421395.jpg"
    },
    {
        category: "Music",
        imageUrl: "https://greenforest.com.ua/public/user_files/p07gq3kw%282%29.jpg"
    },
    {
        category: "Drawing",
        imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"
    },
    {
        category: "Chatting",
        imageUrl: "https://uzd-resources.azureedge.net/57848f28-afe4-477d-bce2-d81ce7ea82aa/group-people-talking.jpg"
    },
    {
        category: "Exercising",
        imageUrl: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-10/Young-woman-running-along-Hudson-River-1296x728-header.jpg?w=1155"
    },
    {
        category: "Urgent",
        imageUrl: "https://phaser.io/content/news/2017/06/phaser-timer-basics-tutorial.png"
    },
    {
        category: "Learning",
        imageUrl: "https://insights.dice.com/wp-content/uploads/2019/07/shutterstock_739534918.jpg"
    },
    {
        category: "Playing",
        imageUrl: "https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/teenager-playing-computer-games.jpg?itok=iWN1VpEh"
    },
]

const users = [
    {
        userId: "#",
        userName: "Dmitry Kozak",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        userId: "#",
        userName: "Vladislav Volynets",
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        userId: "#",
        userName: "Kirill Pavlov",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        userId: "#",
        userName: "Evgeny Kaptyug",
        avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        userId: "#",
        userName: "Vladislav Tsirkunov",
        avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        userId: "#",
        userName: "Pavel Okunev",
        avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        userId: "#",
        userName: "Vladislav Mikulich",
        avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        userId: "#",
        userName: "Pavel Eroshkin",
        avatarUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
]

const commentsList = [
    {
        userId: "#",
        userName: "Kirill Pavlov",
        message:
            "Let's form teams!",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        userId: "#",
        userName: "Vlad Mikulich",
        message:
            "Maybe its better to wait fot others?",
        avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        userId: "#",
        userName: "Dmitry Kozak",
        message: "Guess so.",
        avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        userId: "#",
        userName: "Pasha Eroshkin",
        message: "Agree with Dima.",
        avatarUrl: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        userId: "#",
        userName: "Kirill Pavlov",
        message: "Ok, understood.",
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
    },
]

const picsForGallery = [
    {
        imageUrl: "https://sun9-9.userapi.com/c633728/v633728990/2242/6rG9dNdK71U.jpg"
    },
    {
        imageUrl: "https://sun9-63.userapi.com/c631917/v631917990/e4b5/xnzNGd91rC0.jpg"
    },
    {
        imageUrl: "https://i.guim.co.uk/img/media/cb94bd64fcec049c465769b15e97c7c9e519dc16/0_257_2245_1347/master/2245.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=8c9c90417b5ce0ef262f7dbd0a36834e"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ73QDe_QCbH33OcqT2GJ_-tYgqEn3f2Utzi4yz510gRAGLxXGt&usqp=CAU"
    },
    {
        imageUrl: "https://lastfm.freetls.fastly.net/i/u/770x0/21d2119ca71af29d0111ad673a4f8bb3.jpg"
    },
    {
        imageUrl: "https://img.discogs.com/cPBaJQjBEm0mUgG9Gk0kxtj9xLU=/600x356/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1337414-1445174186-6811.png.jpg"
    },
]

export {
    googleMapsApi,
    eventsList,
    groupsList,
    categoriesList,
    users,
    commentsList,
    picsForGallery
}