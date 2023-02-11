package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>
{
    @Query("SELECT p FROM Project as p WHERE p.owner = ?1 AND p.archived = false")
    public List<Project> findAllButArchivedByOwner(String owner);

    @Query("SELECT p FROM Project as p WHERE p.owner = ?1 AND p.archived = true")
    public List<Project> findAllArchivedByOwner(String owner);
}