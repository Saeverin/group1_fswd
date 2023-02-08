package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.time.LocalDate;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.As;

import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "Status", discriminatorType=DiscriminatorType.STRING)

@JsonTypeInfo(
      use = JsonTypeInfo.Id.NAME, 
      include = As.PROPERTY, 
      property = "type")
@JsonSubTypes({    
    @JsonSubTypes.Type(value = ProjectTask.class, name="ProjectTask"),
    @JsonSubTypes.Type(value = SingleTask.class, name="SingleTask")
})
public abstract class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private Boolean archived = false;
    private Boolean done = false;

    private String category;
    private String text;
    private LocalDate startDate;
    private LocalDate endDate;

    @JsonIgnore
    private String owner;
}