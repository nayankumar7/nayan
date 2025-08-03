package nayan.com.nayan.Repository;

import nayan.com.nayan.Componants.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
        User findByEmail(String email);
}
