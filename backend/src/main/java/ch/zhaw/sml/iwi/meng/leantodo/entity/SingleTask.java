package ch.zhaw.sml.iwi.meng.leantodo.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Data;

@Entity
@Data
@DiscriminatorValue("SingleTask")
public class SingleTask extends ToDo {
    
}
