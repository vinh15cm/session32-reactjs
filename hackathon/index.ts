import { IPlayer } from "./interfaces/player";
class Player implements IPlayer {
    id: number;
    name: string;
    score: number;

    constructor(id: number, name: string, score: number) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}
class PlayerMain {
    // khoi taoj ham constructor cos gia tri la giu lieu lay tu local
    players: Player[];

    constructor() {
        //gan lai gia tri cho mang players la du lieu lay tu localStorage
        const playerLocal = localStorage.getItem("players");
        this.players = playerLocal ? JSON.parse(playerLocal) : [];
    }
    /**
     * lấy danh sách tất cả các player
     * @return danh sách player
     * Auth: Ngọ văn Quý(06/05/2025)
     */
    getAllPlayer(): Player[] {
        return this.players;
    }
    /**
     * 
     * luu thong tin cua player len localstorage
     * auth: quang vinh(06/05/2024)
     */
    savePlayer() {
        localStorage.setItem("players", JSON.stringify(this.players));
    }
    /**
     * ham them moi thong tin player
     * @param newPlayer doi tuong player lay tu client
     * auth: quang vinh (006/05/2024)
     */
    createPlayer(newPlayer: Player): void {
        // push doi tuong newplayer vao trong mang player
        this.players.push(newPlayer);
        //luu du lieu len localstorage
        this.savePlayer();
    }
    removePlayer(playerId: number): void {
        this.players.filter(
            (player: Player) => player.id !== playerId
        );
        //luu thong tin mang player moi
        this.savePlayer();
    }
    // updateScore(type:string, id:number){}
    handleIncreaseScore(id: number) {

    }
    handleDecreaseScore(id: number) {
        //buoc1:tim kiem vi tri cua player trong mang theo id
        const playerIndex = this.players.findIndex(
            (player: Player) => player.id === id
        );
        //buoc 2 : cap nhat so diem player sau khi tim duoc vi tri cua no
        if (playerIndex === -1) {
            // trong truowng hop khong tim thay vi tri player
            console.log("khong tim thay player");
        } else {
            // trong tuong hop tim thay player thi cap nhat vao score
            this.players[playerIndex].score--;
        }
        //buoc3 : luu du lieu sau khi cap nhat
        this.savePlayer();
    }
    /**
     * tinh tong tat ca cac player trong mang
     * @return
     */
    totalPlayer(): number {
        return this.players.length;
    }
    /**
     * tinh tong tat ca score cua players
     * @returns 
     */
    totalPointer(): number {
        let sum: number = 0;

        this.players.forEach((player: Player) => {

        });
        return sum;
    }
}
//khởi tạp đối tượng player main
const player = new PlayerMain();
//#region khu vực tương tác với DOM
const btnAddPlayerElement = document.querySelector("#btnAdd") as HTMLElement;
const inputElement = document.querySelector("#input") as HTMLElement;
// các hàm tương tác với DOM
const createPlayer = () => {
    // chuẩn bị dữ liệu cho đối tượng player
    const newId = Math.ceil(Math.random() * 10000);
    // khởi tạo đói tượng player => hình dung đối tượng Player giống với Object thông thường
    const player = new Player(newId, inputElement.value, 0);
    //gọi hàm create
    if (inputElement.value) {
        playerMain.createPlayer(player);
        //reset giá trị trong ô input
        inputElement.value = "";
    } else {
        alert("tên player không được để trống")
    }

};
// hàm render danh sách player
const renderPlayers = () => {
    //lặp qua mảng players bằng hàm map()
    const playerHtmls = playerMain.getAllPlayer().map((player: Player) => {
        return `
        <li class="player-item">
                        <div class="player-item-left">
                            <i class="fa-solid fa-xmark"></i>
                            <i class="fa-solid fa-crown"></i>
                            <p>${player.name}</p>
                        </div>
                        <div class="player-item-right">
                            <button class="btn-count">-</button>
                            <p class="player-score">${player.score}</p>
                            <button class="btn-count">+</button>
                        </div>
                    </li>
        `;
    });
}
// chuyển đổi mảng thành chuỗi
// bắt sự kiện trên DOM
// khi click vào nút Add Player sẽ gọi hàm thêm mới Player
btnAddPlayerElement.addEventListener("click", () => {
    createPlayer();
});
//#endregion