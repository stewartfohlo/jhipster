package org.jhipster.to_do_app.repository;

import org.jhipster.to_do_app.domain.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Task entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    Page<Task> findByCategoryUserLoginOrderByDueDesc(String orElse, Pageable pageable);
}
