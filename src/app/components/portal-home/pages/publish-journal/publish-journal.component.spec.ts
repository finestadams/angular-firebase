import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishJournalComponent } from './publish-journal.component';

describe('PublishJournalComponent', () => {
  let component: PublishJournalComponent;
  let fixture: ComponentFixture<PublishJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
