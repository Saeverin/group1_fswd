package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    public List<Task> findByOwner(String owner);
   
    @Query("SELECT t FROM Task as t WHERE t.owner = ?1 AND t.archived = false")
    public List<Task> findAllButArchivedByOwner(String owner);

    @Query("SELECT t FROM Task as t WHERE t.owner = ?1 AND t.archived = true")
    public List<Task> findAllArchivedByOwner(String owner);

    @Query("SELECT t FROM Task as t WHERE t.project = ?1")
    public List<Task> findAllProjecttasksByProject(Project project);

    @Modifying
    @Transactional
    @Query("DELETE FROM ProjectTask t WHERE t.project = ?1")
    public Integer deleteProjectTaskByProject(Project project);
    
}