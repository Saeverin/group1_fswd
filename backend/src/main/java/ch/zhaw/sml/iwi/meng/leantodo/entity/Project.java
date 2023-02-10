package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    
    private String owner;
    
    private Boolean archived = false;
    private Boolean done = false;

    private LocalDateTime deadline;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProjectTask> projectTasks = new ArrayList<>();
    
}