import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test clean()', () => {
    component.users = [{gender:'m',mail:'test@example.com',name:'test',id:1}];
    component.clean();
    expect(component.users).toEqual([])
  });
  it('should test filterDynamic()', () => {
     var array = [
      {gender:'m',mail:'test@example.com',name:'test',id:1},
      {gender:'m',mail:'prueba@example.com',name:'test',id:1},
    
    ];
    component.users= array;
    component.usersFilter= array;
    component.filterDynamic('prueba');
    expect(component.usersFilter.length).toEqual(1)
  });
  it('should test imageUser()', () => {
     var array = [
      {gender:'m',mail:'test@example.com',name:'test',id:1},
      {gender:'f',mail:'prueba@example.com',name:'test',id:1},
    
    ];

    var url = component.imageUser('m');
    var url2 =component.imageUser('f');
    expect(typeof url ).toBe('string')
    expect(typeof url2 ).toBe('string')
  });
  it('should test add() toHaveBeenCalled', () => {
    spyOn(component,'loadUsers')
    component.add();
    expect(component.loadUsers ).toHaveBeenCalled()
  });

});
