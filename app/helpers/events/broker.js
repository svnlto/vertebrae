define([
  'backbone',
  'helpers/events/events'
],

/*
 * Based on Eric Feminella's Backbone.EventBroker
 * https://github.com/efeminella/backbone-eventbroker
 *
 * The Backbone.EventBroker adds a general purpose Event Broker implementation
 * to Backbone based on the Backbone Events API. The EventBroker can be used
 * directly to serve as a centralized event management mechanism for an entire
 * application. Additional, context specific, namespaced brokers can also be
 * created in order to provide unique brokers within a particular part of an
 * application.
 */

function (Backbone, eventSchema) {

  'use strict';

  var bbEvents = _.extend({}, Backbone.Events);

  // stop users binding events directly to app i.e. app.on('users:add'),
  // and instead force them to to use the event broker
  bbEvents.on = function () {
    var args = _.toArray(arguments);
    Backbone.Events.on.apply(this, args);
    console.warn('EVENT BROKER Do not bind app directly "%s"', args[0]);
  };

  // Defines the cache which contains each namespaced EventBroker instance
  var _brokers = {},

  registration = function( interests, context, broker, method ) {
    if ( !context && interests.interests ) {
        context   = interests;
        interests = interests.interests;
    }
    for ( var event in interests ) {
      if (interests.hasOwnProperty(event)) {
        broker[ method ]( event, context[ interests[event] ], context );
      }
    }
    return broker;
  },


  eventRegistry = {
    register: function( interests, context ) {
      if ( interests || context ) {
        return registration( interests, context, this, 'on' );
      }
      return this;
    },


    unregister: function( interests, context ) {
      if ( interests || context ) {
        return registration( interests, context, this, 'off' );
      }
      return this;
    }
  },

  // creates and returns the EventBroker ...
  broker = _.extend({

    get: function( namespace ) {

      if ( _brokers[ namespace ] === undefined ) {

        _brokers[ namespace ] = _.extend( { 'namespace': namespace }, bbEvents, eventRegistry );

        _brokers[ namespace ].on = function () {
          var args = _.toArray(arguments),
              eventType = args[0],
              split;

          if (typeof eventType !== 'string') {
            return;
          }

          // allows binding of multiple events i.e.
          // app.get('projects').on('add updated', function(){});
          split = eventType.split(/\s/);

          if (split.length > 1) {
            _.each(split, function (item) {
              broker.get(namespace).on(item, args[1]);
            });

            return;
          }

          if (typeof eventSchema[namespace] === 'undefined') {
            console.error('EVENT BROKER missing namespace object', namespace);
            throw new Error('EVENT BROKER missing namespace object',
                'helpers.events.broker', 'on');
          }

          if (_.indexOf(eventSchema[namespace], args[0]) === -1) {
            throw new Error('EVENT BROKER Missing event type schema for', namespace + '.' + args[0],
                'helpers.events.broker', 'on');
          }

          Backbone.Events.on.apply(this, args);
        };

        _brokers[ namespace ].off = function () {
          var args = _.toArray(arguments);
          Backbone.Events.off.apply(this, args);
        };
      }

      return _brokers[ namespace ];
    },


    has: function( namespace ) {
      return _brokers[ namespace ] !== undefined;
    },


    destroy: function( namespace ) {
      if ( !namespace ) {
        for (var ns in _brokers ) {
          if (_brokers.hasOwnProperty(ns)) {
            this.destroy( ns );
          }
        }
      }
      else if ( _brokers[ namespace ] ) {
         _brokers[ namespace ].off();
        console.log(222, 'Destroying ' + namespace + ' namespace');
        delete _brokers[ namespace ];
      }
      return this;
    }
  }, bbEvents, eventRegistry);


  // finally extend the app object with the broker methods
  return function (app) {
    app.get = broker.get;
  };

});
