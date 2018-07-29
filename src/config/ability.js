import { AbilityBuilder } from '@casl/ability'

export default function defineAbilitiesFor (ctx) {
  let user = (ctx.state.isAuthenticated) ? ctx.state.user : {roles: ['public']}
  let roleExists = (roleArray, roleName) => {
    return roleArray.indexOf(roleName) !== -1
  }

  return AbilityBuilder.define((can, cannot) => {
    switch (true) {
      case roleExists(user.roles, 'user'):
        can(['read', 'update'], 'User')
        break
      case roleExists(user.roles, 'Subscriber'):
        can(['read'], 'Video')
        break
      case roleExists(user.roles, 'Admin'):
        can(['read', 'update'], 'User')
        can(['read', 'write', 'update'], 'Video')
        can(['update', 'delete'], 'Post')
        break
      default:
    }
  })
}
