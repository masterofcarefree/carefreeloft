describe('Video Player', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads and plays the first video', () => {
    cy.get('video').should('exist').and('have.prop', 'paused', false);
  });

  it('swipes to next video', () => {
    cy.get('.video-player')
      .trigger('touchstart', { touches: [{ clientY: 500 }] })
      .trigger('touchend', { changedTouches: [{ clientY: 300 }] });
    
    // 假设我们可以通过某种方式识别当前播放的视频
    cy.get('video').should('have.attr', 'src').and('include', 'video2.mp4');
  });
});
