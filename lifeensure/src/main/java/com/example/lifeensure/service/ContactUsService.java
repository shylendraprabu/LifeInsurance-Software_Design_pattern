package com.example.lifeensure.service;

import com.example.lifeensure.modal.ContactUs;
import com.example.lifeensure.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository contactUsRepository;

    public ContactUs addContactUs(ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }

    public List<ContactUs> getAllContactUs() {
        return contactUsRepository.findAll();
    }

    public Optional<ContactUs> getContactUsById(int id) {
        return contactUsRepository.findById(id);
    }

    public void deleteContactUs(int id) {
        contactUsRepository.deleteById(id);
    }
}
