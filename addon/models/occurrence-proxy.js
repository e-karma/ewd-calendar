import Ember from 'ember';
import moment from 'moment';
import computedMoment from 'ewd-calendar/macros/computed-moment';
import Day from './day';

var OccurrenceProxy = Ember.Object.extend(Ember.Copyable, {
  calendar: null,
  content: null,
  endingTime: computedMoment('content.endsAt'),
  startingTime: computedMoment('content.startsAt'),
  title: Ember.computed.oneWay('content.title'),

  duration: Ember.computed('startingTime', 'endingTime', function() {
    return moment.duration(
      this.get('endingTime').diff(this.get('startingTime'))
    );
  }),

  day: Ember.computed('startingTime', 'calendar', function() {
    return Day.create({
      calendar: this.get('calendar'),
      offset: this.get('startingTime').isoWeekday() - 1
    });
  }),

  copy: function() {
    return OccurrenceProxy.create({
      calendar: this.get('calendar'),

      content: Ember.Object.create({
        startsAt: this.get('content.startsAt'),
        endsAt: this.get('content.endsAt'),
        title: this.get('content.title')
      })
    });
  }
});

export default OccurrenceProxy;
