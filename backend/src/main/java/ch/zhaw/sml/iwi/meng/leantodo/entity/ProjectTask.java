package ch.zhaw.sml.iwi.meng.leantodo.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
@DiscriminatorValue("ProjectTask")
public class ProjectTask extends Task {
    
    @ManyToOne
    private Project project;
}
