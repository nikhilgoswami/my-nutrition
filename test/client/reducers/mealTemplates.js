/* eslint no-unused-expressions: 0 */
/* global beforeEach, describe, it, expect, sinon */
import reducer, { initialState } from '../../../app/client/reducers/mealTemplates';

describe('reducers', () => {
  describe('mealTemplates', () => {
    it('should return its default state when called without state', () => {
      const state = reducer(undefined, {});

      expect(state).to.deep.equal(initialState);
    });

    it('should return the state unchanged when called without an action it does not handle', () => {
      const state = reducer({ foo: 'bar' }, {});

      expect(state).to.deep.equal({ foo: 'bar' });
    });

    it('should return the state with ready set to true when called with a MEAL_TEMPLATES_READY action', () => {
      const state = reducer({}, { type: 'MEAL_TEMPLATES_READY', ready: true });

      expect(state).to.deep.equal({ ready: true });
    });

    it('should return the state with the action.mealTemplates as items when called with a MEAL_TEMPLATES_CHANGED action', () => {
      const state = reducer({}, { type: 'MEAL_TEMPLATES_CHANGED', data: [{ foo: 'bar'}] });

      expect(state).to.deep.equal({ items: [{ foo: 'bar'}] });
    });
  });
});
