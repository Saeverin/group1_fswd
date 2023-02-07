package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class ToDo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private boolean archived = false;
    private boolean done = false;

    private String category;
    private String text;
    private Date startDate;
    private Date endDate;


    @JsonIgnore
    private String owner;
}