import { TestBed } from '@angular/core/testing';
import { TableSelection } from './table-selection';

describe('TableSelection', () => {
  let service: TableSelection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSelection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
