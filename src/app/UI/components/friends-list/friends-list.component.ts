import {Component, ElementRef, ViewChild, Input} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { User } from '../../../_models/user';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { FollowerFriend } from '../../../_models/follower';
// import {NoConflictStyleCompatibilityMode} from '@angular/material';

@Component({
    selector: 'friends-list',
    styleUrls: ['friends-list.css'],
    templateUrl: 'friends-list.html',
})
export class FriendsListComponent {
    displayedColumns = ['userId', 'userName', 'color'];
    @Input() dSource: string = "change me";
    @Input() followerList : FollowerFriend[];
    @Input() followingList : FollowerFriend[];

    @ViewChild('filter') filter: ElementRef;

    ngOnInit() {
        // this.dataSource = new ExampleDataSource(this.exampleDatabase);
        // Observable.fromEvent(this.filter.nativeElement, 'keyup')
        // .debounceTime(150)
        // .distinctUntilChanged()
        // .subscribe(() => {
        //     if (!this.dataSource) { return; }
        //     this.dataSource.filter = this.filter.nativeElement.value;
        // });
        console.log(this.followerList);
    }

    // public setTitle(_title : string) : void {
    //     this.Ftitle = _title;
    // }
}

// /** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//                 'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//                 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//                 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

// export interface UserData {
//     id: string;
//     name: string;
//     progress: string;
//     color: string;
// }

// /** An example database that the data source uses to retrieve data for the table. */
// export class ExampleDatabase {
//     /** Stream that emits whenever the data has been modified. */
//     dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
//     get data(): UserData[] { return this.dataChange.value; }

//     constructor() {
//         // Fill up the database with 100 users.
//         for (let i = 0; i < 100; i++) { this.addUser(); }
//     }

//     /** Adds a new user to the database. */
//     addUser() {
//         const copiedData = this.data.slice();
//         copiedData.push(this.createNewUser());
//         this.dataChange.next(copiedData);
//     }

//     /** Builds and returns a new User. */
//     private createNewUser() {
//         const name =
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//         return {
//             id: (this.data.length + 1).toString(),
//             name: name,
//             progress: Math.round(Math.random() * 100).toString(),
//             color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//         };
//     }
// }

// /**
// * Data source to provide what data should be rendered in the table. Note that the data source
// * can retrieve its data in any way. In this case, the data source is provided a reference
// * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
// * the underlying data. Instead, it only needs to take the data and send the table exactly what
// * should be rendered.
// */
// export class ExampleDataSource extends DataSource<any> {
//     _filterChange = new BehaviorSubject('');
//     get filter(): string { return this._filterChange.value; }
//     set filter(filter: string) { this._filterChange.next(filter); }

//     constructor(private _exampleDatabase: ExampleDatabase) {
//         super();
//     }

//     /** Connect function called by the table to retrieve one stream containing the data to render. */
//     connect(): Observable<UserData[]> {
//         const displayDataChanges = [
//             this._exampleDatabase.dataChange,
//             this._filterChange,
//         ];

//         return Observable.merge(...displayDataChanges).map(() => {
//             return this._exampleDatabase.data.slice().filter((item: UserData) => {
//                 let searchStr = (item.name + item.color).toLowerCase();
//                 return searchStr.indexOf(this.filter.toLowerCase()) != -1;
//             });
//         });
//     }

//     disconnect() {}
// }
