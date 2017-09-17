import {ShowUsersComponent, AddUserComponent} from './components';

export const routes = [
    {path: 'addUser', component: AddUserComponent},
    {path: 'viewAllUsers', component: ShowUsersComponent},
    {path: '', redirectTo:'addUser', pathMatch:'full'},
    {path: '**', redirectTo:'addUser', pathMatch:'full'},
];