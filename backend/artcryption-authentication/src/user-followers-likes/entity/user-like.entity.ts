import { BeforeInsert, ChildEntity, JoinColumn, ManyToOne } from 'typeorm';
import FollowerLike from 'src/user-followers-likes/follower-like.entity';
import { User } from 'src/users/users.entity';

enum PublicityType {
  follower,
  like,
}

@ChildEntity()
export class UserLike extends FollowerLike {
  constructor() {
    super();
  }

  @ManyToOne((type) => User, (primary) => primary.id, { nullable: false })
  @JoinColumn({ name: 'primary_id' })
  primaryId: User;

  @BeforeInsert()
  populatePrimaryType() {
    this.publicityType = PublicityType.like;
  }
}
