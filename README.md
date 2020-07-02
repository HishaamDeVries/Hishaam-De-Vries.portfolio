## Building Process

1. The first approach was to use libraries to create animations because creating my own was time consuming. For that reason, I decided to use [Wow.js](https://wowjs.uk/) and [Animate.css](https://daneden.github.io/animate.css/) libraries.

2. Used React Props to manage components references in the application and share components details to create [SmoothScroll](https://css-tricks.com/snippets/jquery/smooth-scrolling/) usign my own code.

3. Most of the page uses Bootstrap

4. The form uses [formsfree.io](https://formspree.io/) for the backend submission.

5. I wanted to create an amazing animated background at the top of the page, so I used some help from [codepen.io](https://codepen.io/saransh/pen/BKJun) and adapted the code to my website.

## Challenges that took me some time to solve

1. Implementing Wow.js + Animate.css was difficult at the beginning, but worth it.

2. 2.Sharing DOM component details such as height, offsetTops, etc, between other components was a bit difficult because [React Refs](https://reactjs.org/docs/refs-and-the-dom.html) had to match parent containers' ids. That took me the long time to figure out.
