/* eslint-disable*/
type Messages = typeof import ("./messages/en.json")
type esMessages = typeof import ("./messages/es.json")

declare interface IntlMessages extends esMessages,Messages {}