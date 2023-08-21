import config from 'config'

// eslint-disable-next-line import/order
import store from 'store2'

import { Types } from 'modules/auth'

export const getSession = (): Types.IEntity.Tokens => store.get(config.api.tokensKEY) || {}

export const clearSession = () => store.remove(config.api.tokensKEY)

export const setSession = (tokens: Types.IEntity.Tokens) => store.set(config.api.tokensKEY, tokens)
