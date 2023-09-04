import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { User } from './User'
import { Favorite } from './Favorite'
import { Like } from './Like'
import { WatchTime } from './WatchTime'

Category.hasMany(Course, { as: 'courses' })

Course.belongsTo(Category)
Course.belongsToMany(User, {through: Favorite})
Course.belongsToMany(User, {through: Like})
Course.hasMany(Episode, { as: 'episodes' })
Course.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'course_id' })

Episode.belongsTo(Course)
Episode.belongsToMany(User, {through: WatchTime})

Like.belongsTo(Course)
Like.belongsTo(User)

User.belongsToMany(Course, {through: Favorite})
User.belongsToMany(Course, {through: Like})
User.belongsToMany(Episode, {through: WatchTime})
User.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'user_id' })

export {
  Course,
  Category,
  Episode,
  User,
  Favorite,
  Like,
  WatchTime
}