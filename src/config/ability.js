import { AbilityBuilder } from '@casl/ability'

const abilitiesMapping = {
  user: {
    abilities: [{ entity: 'User', functions: ['read', 'update'] }]
  },
  subscriber: {
    abilities: [{ entity: 'Video', functions: ['read'] }]
  },
  admin: {
    abilities: [
      { entity: 'Video', functions: ['read', 'update'] },
      { entity: 'User', functions: ['read', 'write', 'update'] },
      { entity: 'Post', functions: ['update', 'delete'] }
    ]
  }
}

export default function defineAbilitiesFor (ctx) {
  return AbilityBuilder.define((can) => {
    let user = ctx.state.isAuthenticated
      ? ctx.state.user
      : { roles: ['public'] }
    const roleAbilities = user.roles.map(role => abilitiesMapping[role])
    roleAbilities.forEach(roleAbility => {
      can(roleAbility.functions, roleAbility.entity)
    })
  })
}
