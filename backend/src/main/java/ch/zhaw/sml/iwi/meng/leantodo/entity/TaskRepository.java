package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    public List<Task> findByOwner(String owner);
   
    @Query("SELECT t FROM Task as t WHERE t.owner = ?1 AND t.archived = false")
    public List<Task> findAllButArchivedByOwner(String owner);

    @Query("SELECT t FROM Task as t WHERE t.owner = ?1 AND t.project = ?2")
    public List<Task> findAllProjecttasksByProject(String owner, Project project);
    
}