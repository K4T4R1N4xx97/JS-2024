import { action, makeObservable, observable, runInAction } from "mobx";

class UserStore{
    userInfo = [
        {
          id:"1",
          ime:"Igor",
          hobiji: ["pecanje", "stolni tenis"],
        },
        {
          id:"2",
          ime:"Marko",
          hobiji: ["Kuglanje", "Rukomet"],
        },
    ];
    editedUserId = null;
    newName = "";
    newHobi = "";

    constructor(){
        makeObservable(this, {
            userInfo: observable,
            editedUserId: observable,
            newName: observable,
            newHobi: observable,
            updateUser: action,
            addHobi: action,
            setEditedUserId: action,
            stopEdit: action,
        });
        // autorun(this.logUserDetails);
    };  

    // logUserDetails = () => {
    //     console.log(`Broj hobija: ${this.userInfo.hobiji.length}`);
    // }

    runInAction = (fn) => {
        return runInAction(fn);
    };
    
    updateUser = (userId, newName) => {
        const userToUpdate = this.userInfo.find((user) => user.id === userId);
        if(userToUpdate){            
            userToUpdate.ime = newName;
        }
    };

    addHobi = (userId, newHobi) => {
        const userToUpdate = this.userInfo.find((user) => user.id === userId);
        if(userToUpdate){
            // Ukloni postojece hovije
            userToUpdate.hobiji = [];
            // dodaj nove hobije
            userToUpdate.hobiji.push(...newHobi);
        };
    };

    setEditedUserId = (userId) => {
        this.editedUserId = userId;
    };

    stopEdit = () => {
        this.editedUserId= null;
        this.newName = "";
        this.newHobi = "";
    };
}

export default UserStore;