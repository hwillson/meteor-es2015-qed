import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import xkcdplot from 'xkcdplot';

import './main.html';

Template.body.onRendered(function onRendered() {
  const plot = xkcdplot();
  plot.width(400).height(300)
  plot.title('Meteor ES2015 Modules + npm - Q.E.D.');
  plot.xlabel('Meteor ES2015 Module + npm Usage');
  const data = [];
  _.times(50, (index) => {
    data.push({ x: index, y: index });
  });
  plot.plot(data, {stroke: "red"});
  plot('body').xlim([-2, 50]).ylim([-2, 50]).draw();
});
