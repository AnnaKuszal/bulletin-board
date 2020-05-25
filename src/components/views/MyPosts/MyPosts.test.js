import React from 'react';
import { shallow } from 'enzyme';
import {MyPostsComponent } from './MyPosts';


const mockProps = {
  posts: [
    { id: '1', title: 'title 1', content: 'content 1' },
    { id: '2', title :'title 2', content: 'content 2' },
  ],
};


describe('Component MyPosts', () => {
  it('should render without crashing', () => {
    const component = shallow(<MyPostsComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
